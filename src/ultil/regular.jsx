import { useNavigate } from "react-router-dom";

export function cancelPropagation(event) {
  event.stopPropagation();
}

export function formatNumber(
  inputString,
  decimalPlaces = 2,
  thousandsSeparator = ",",
  decimalSeparator = "."
) {
  // Chuyển đổi chuỗi thành số
  const number = parseFloat(inputString);

  // Kiểm tra nếu không phải là một số hợp lệ
  if (isNaN(number)) {
    return "Invalid input";
  }

  // Sử dụng toLocaleString để định dạng số với các tham số được tùy chỉnh
  const formattedNumber = number.toLocaleString("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
    useGrouping: true,
    groupingSeparator: thousandsSeparator,
    decimalSeparator: decimalSeparator,
  });

  return formattedNumber;
}

export function upperFirstChar(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function upperAllChar(str) {
  return str.toUpperCase();
}

export function getTimeLeft(seconds) {
  if (seconds >= 31536000) {
    // 1 năm = 365 ngày x 24 giờ x 60 phút x 60 giây
    const years = Math.floor(seconds / 31536000);
    return `${years} year${years > 1 ? "s" : ""}`;
  } else if (seconds >= 2419200) {
    // 1 tháng = 28 ngày x 24 giờ x 60 phút x 60 giây
    const months = Math.floor(seconds / 2419200);
    return `${months} month${months > 1 ? "s" : ""}`;
  } else if (seconds >= 604800) {
    // 1 tuần = 7 ngày x 24 giờ x 60 phút x 60 giây
    const weeks = Math.floor(seconds / 604800);
    return `${weeks} week${weeks > 1 ? "s" : ""}`;
  } else if (seconds >= 86400) {
    const days = Math.floor(seconds / 86400);
    return `${days} day${days > 1 ? "s" : ""}`;
  } else {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    let result = "";
    if (hours > 0) {
      result += `${hours}${hours > 1 ? "h" : ""}`;
      // result += `${hours} hour${hours > 1 ? "s" : ""}`;
    }
    if (minutes > 0) {
      result += `${result.length > 0 ? "" : ""}${minutes}${
        // result += `${result.length > 0 ? " " : ""}${minutes} minute${
        minutes > 1 ? "m" : ""
      }`;
    }
    if (seconds > 0) {
      result += `${result.length > 0 ? "" : ""}${seconds}${
        // result += `${result.length > 0 ? " " : ""}${seconds} second${
        seconds > 1 ? "s" : ""
      }`;
    }

    return result;
  }
}
