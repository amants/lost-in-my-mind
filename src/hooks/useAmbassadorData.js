import { useEffect, useRef, useReducer } from "react";
import { isEmpty } from "lodash";

export const useAmbassadorData = () => {
  const cache = useRef({});

  const fetchData = async () => {
    if (!isEmpty(cache.current)) {
      dispatch({ type: "FETCHED", payload: cache });
    } else {
      try {
        dispatch({ type: "FETCHING" });
        const ambassadorData = await fetch("./assets/ambassadorData.json");
        dispatch({ type: "FETCHED", payload: await ambassadorData.json() });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    }
  };

  const initialState = {
    status: "idle",
    error: null,
    data: {},
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, status: "FETCHING" };
      case "FETCHED":
        return { ...initialState, status: "FETCHED", data: action.payload };
      case "FETCH_ERROR":
        return { ...initialState, status: "ERROR", error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    fetchData();
  }, []);

  return state;
};
