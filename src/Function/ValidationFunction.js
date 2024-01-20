
import moment from "moment";

 export const Singlefieldtest = (fieldsofdata) => {
    let errorisTrue=false;
    const resultdata = fieldsofdata.map((element) => {
      if (element.value === '') {
         errorisTrue=true
        return {
          ...element,
          error: {
            errorState: true,
            errorMessage: "This field is required",
          },
        };
      }
      else{
        return element
      }
    });
    if(errorisTrue){
      return {
        iserror:true,
       resultdata:resultdata
      }
    }
    return false;
  };

  export const getDurationDiff=(startDate,endDate)=>{
    const Diffcal=moment.duration(endDate.diff(startDate))
    if(!Diffcal.isValid()){
        return 'invalid'
    }
    return {
     years:Diffcal.years(),
     months:Diffcal.months(),
     day:Diffcal.days()
    }
}

 export const onSubmitValidation = (e, userdata,SetInputvalue,setAnimation) => {
  e.preventDefault();
  const [day, month, year] = userdata;
  if (
    !day.error.errorState &&
    !month.error.errorState &&
    !year.error.errorState
  ) {
    const dateString = `${year.value}-${
      month.value < 10
        ? month.value.startsWith("0")
          ? month.value
          : `0${month.value}`
        : month.value
    }-${day.value}`;
    try {
      const testdata = Singlefieldtest(userdata);
      if (testdata != false) {
        throw testdata;
      }
      const dateNow = new Date();
      const startDate = moment(dateString,'YYYY-MM-DD');
      const endDate = moment(
        `${dateNow.getFullYear()}-${
          dateNow.getMonth() + 1
        }-${dateNow.getDate()}`
      ,'YYYY-MM-DD');
      const diffDurationValue = getDurationDiff(startDate, endDate);
      if (diffDurationValue === "invalid") {
        throw {
          iserror: true,
          resultdata: userdata.map((element) => {
            if (element.id === "DAY") {
              return {
                ...element,
                error: {
                  errorState: true,
                  errorMessage: "Must be a valid date",
                },
              };
            }

            return element;
          }),
        };
      }

      setAnimation(() => diffDurationValue);
    } catch (e) {
      SetInputvalue(e.resultdata);
    }
  }
};