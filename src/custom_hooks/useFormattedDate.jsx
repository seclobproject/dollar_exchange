const useFormattedDate = () => {
    const formatDate = (date) => {
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      const formattedDate = date.toLocaleDateString("en-GB", options);
      const formattedTime = date.toTimeString().split(" ")[0];
      return `${formattedDate} ${formattedTime}`;
    };
  
    return formatDate(new Date());
  };
  
  export default useFormattedDate;
  