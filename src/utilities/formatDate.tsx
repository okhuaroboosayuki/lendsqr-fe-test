export const formatDate = (inputDate: string) => {
  const parts = inputDate.split(" ");
  const dateString = parts[0];
  const timeString = parts[1];

  // Parse the date and time parts separately
  const dateParts = dateString.split("-");
  const timeParts = timeString.split(":");

  // Extract year, month, day, hours, minutes
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1; // Months in JS are zero-indexed
  const day = parseInt(dateParts[2]);
  const hours = parseInt(timeParts[0].substring(1)); // Remove 'T' and parse hours
  const minutes = parseInt(timeParts[1]);

  // Create a new Date object with adjusted timezone offset
  const date = new Date(Date.UTC(year, month, day, hours, minutes));

  // Format the date components
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const formattedDate = `${monthNames[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()} ${date.getHours() >= 12 ? "PM" : "AM"}`;

  return formattedDate;
};
