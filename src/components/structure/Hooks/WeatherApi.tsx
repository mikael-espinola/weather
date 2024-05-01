import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentName } from "../../redux/cityNameSlice";
import { getData } from "../../redux/setDataslice";

function useWeatherApi() {
  const APIKey = "d00a2668b28806036b4b1c67fbad9b73";
  const name = useSelector(setCurrentName);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name === "" || name === undefined) {
      return;
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${APIKey}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        const structure = data;
        dispatch(getData(structure));
      });
  }, [name]);
}

export default useWeatherApi;
