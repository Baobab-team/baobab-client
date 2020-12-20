import { BUSINESS_SOCIAL_LINKS } from "@Models/business.model";

function getLogoIcon(type: BUSINESS_SOCIAL_LINKS) {
    return 'fab '+ 'fa-'+type;
}

function getDayText(day: number) {
    let aDay = null;

    switch (day) {
      case 1:
        aDay = 'calendar.days.monday';
        break;
      case 2:
        aDay = 'calendar.days.tuesday';
        break;
      case 3:
        aDay = 'calendar.days.wednesday';
        break;
      case 4:
        aDay = 'calendar.days.thursday';
        break;
      case 5:
        aDay = 'calendar.days.friday';
        break;
      case 6:
        aDay = 'calendar.days.saturday';
        break;
      case 7:
        aDay = 'calendar.days.sunday';
        break;
    }

    return aDay;
  }
  
export {getLogoIcon, getDayText}