const initialState = {
  newsID: [],
  newsUK: [],
  newsUS: [],
  newsTopHeadLineID: [],
  newsCategories: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
      };
    case "FETCH_NEWS_ID":
      return {
        ...state,
        newsID: action.payload,
        loading: false,
      };
    case "FETCH_NEWS_US":
      return {
        ...state,
        newsUS: action.payload,
        loading: false,
      };
    case "FETCH_NEWS_UK":
      return {
        ...state,
        newsUK: action.payload,
        loading: false,
      };
    case "FETCH_NEWS_HEADLINE_ID":
      return {
        ...state,
        newsTopHeadLineID: action.payload,
        loading: false,
      };
    case "FETCH_NEWS_CATEGORIES":
      return {
        ...state,
        newsCategories: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
