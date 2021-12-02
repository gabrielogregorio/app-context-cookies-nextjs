import { setCookie } from 'nookies';
import { daysInSeconds } from '../helpers/daysInSeconds';

export const defineThemeCookies = (
  nameCookie: string,
  valueCookie: string,
  days: number,
) => {
  return setCookie(null, nameCookie, valueCookie, {
    maxAge: daysInSeconds(days),
    path: '/', // disponível a partir de
  });
};
