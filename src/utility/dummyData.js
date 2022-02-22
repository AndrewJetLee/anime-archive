export const months = [
  { short: "Jan", long: "January" },
  { short: "Feb", long: "February" },
  { short: "Mar", long: "March" },
  { short: "Apr", long: "April" },
  { short: "May", long: "May" },
  { short: "Jun", long: "June" },
  { short: "Jul", long: "July" },
  { short: "Aug", long: "August" },
  { short: "Sep", long: "September" },
  { short: "Oct", long: "October" },
  { short: "Nov", long: "November" },
  { short: "Dec", long: "December" },
];

export const days = Array(32).fill(" ");

export const getYears = (currentYear) => {
  let pastYears = [];
  for (let i = currentYear - 100; i < currentYear; i++) {
    pastYears.push(i);
  }
  return pastYears;
};
