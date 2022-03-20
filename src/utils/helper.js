import moment from "moment";

export const parseDate = (date, defaultFormat = "MMMM DD YYYY") => {
  if (!date) {
    return "";
  }
  return moment(date).format(defaultFormat);
};
