import React, { useState, useEffect, useRef } from "react";

const useGetLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
        error: null,
        address: null,
    });

    const hasFetchedLocation = useRef(false);

    const onSuccess = (position) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            },
            error: null,
            address: null,
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            coordinates: { lat: "", lng: "" },
            error: {
                code: error.code,
                message: error.message,
            },
            address: null,
        });
        console.error("Geolocation error:", error);
        if (error.code === 1) {
            alert("Please turn on location permissions.");
            // Try to prompt user to enable location
        
        }
    };

    const fetchLocationData = async (coordinates) => {
        try {
            const coordinateResponse = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${coordinates.lat}+${coordinates.lng}&key=${import.meta.env.VITE_OPENCAGE_API_KEY}`
            );
            const coordinateData = await coordinateResponse.json();

            if (
                coordinateData &&
                coordinateData.results &&
                coordinateData.results.length > 0
            ) {
                setLocation((prevState) => ({
                    ...prevState,
                    address: coordinateData.results[0].components.county,
                }));
            }
        } catch (error) {
            console.error("Error fetching location data:", error);
        }
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
            return;
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    useEffect(() => {
        if (location.loaded && location.coordinates.lat && location.coordinates.lng && !hasFetchedLocation.current) {
            hasFetchedLocation.current = true;
            fetchLocationData(location.coordinates);
        }
    }, [location.loaded, location.coordinates]);

    // Return location only when both loaded and address are available
    if (location.loaded && location.address) {
        return location;
    } else {
        return null; // Return null until both conditions are met
    }
};

export default useGetLocation;
