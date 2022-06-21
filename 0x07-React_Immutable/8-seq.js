import { Seq } from 'immutable';

function capitalizeStr(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function printBestStudents(object) {
  const seq = Seq(object);

  const filt = seq.filter((std) => {
    std.firstName.charAt(0).toUpperCase();
    return std.score > 70;
  });

  const obj = filt.toJS();

  Object.keys(obj).map((key) => {
    obj[key].firstName = capitalizeStr(obj[key].firstName);
    obj[key].lastName = capitalizeStr(obj[key].lastName);
    return obj[key];
  });

  console.log(obj);
}
