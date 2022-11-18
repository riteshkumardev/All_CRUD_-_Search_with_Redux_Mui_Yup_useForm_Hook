import {
  ADDITEM,
  APICALL,
  CANCEL,

  DELETEITEM,
  EDITITEM,
  FILTERDATA,
  GOTOFORM,
  UPDATE,
} from "./type";

const int = {
  isEdit: false,
  changepath: false,
  filterData: [],
  edit: {},
  data: [],
  apidata: [],
  formStatus:false,
   inputValues : {
    capsule_serial: "",
    capsule_id: "",
    status: "",
    original_launch: "",
    original_launch_unix: null,
    missions: [
      {
        name: "COTS 1",
        flight: 7,
      },
    ],
    landings: null,
    type: "",
    details: "",
    reuse_count: null,
  }


};
export const reducer = (state = int, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADDITEM:
      console.log(payload, "payload");
      return {
        ...state,
        apidata: [...state.apidata, payload],
        
        formStatus: false
      };
    case EDITITEM:
      return {
        ...state,
        edit: payload.editdata,
        isEdit:payload.isEdit
      };
    case CANCEL:
      return {
        ...state,
        isEdit: false,
        formStatus: false,
      };
    case GOTOFORM:
      return {
        ...state,
        formStatus: true,
      };
    case UPDATE:
      return {
        ...state,
        apidata: state.apidata.map((el) =>
          el.capsule_serial === payload.capsule_serial ? payload : el
        ),
        isEdit: false,
      };
    case APICALL:
      return {
        ...state,
        apidata: payload.apidata,
      
        
       
      };
    case DELETEITEM:
      const deletdata = state.apidata.filter((el) => el.capsule_serial !== payload);

     
      return {
        ...state,
        apidata: deletdata,
      };
    case FILTERDATA:
    
console.log(payload,"payload")
      
      return {
        
        ...state,
        apidata: payload,
      };

    default:
      return state;
  }
};