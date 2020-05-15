export const useNetwork = onchange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if(typeof onchange === "function"){
            onchange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };
    useEffect(() => {
      window.addEventListener("online",handleChange);
      window.addEventListener("offline", handleChange);
      return () => {
          window.removeEventListener("online",handleChange);
          window.removeEventListener("offline", handleChange);
      };
    }, []);
    return status;
};
