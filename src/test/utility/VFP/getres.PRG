SELECT resno as pk,guestNum as guestPk,arrival,depart,level,name,; 
  package as packageCode, in_RATES.RDESC as packageName,;
  unit as roomNumber, in_unit.utype as roomType from in_res ;
  left join in_rates on rcode = package ;
  left JOIN in_unit on in_res.unit = in_unit.unum ;
  WHERE share = ' ' ;
    AND level in ('NEW','CNF') ;
    AND GUESTNUM <> '000000' ;
    INTO CURSOR FUNG 
   
lc = nfCursorToJson(.T.)
lc = STRTRAN(lc,'guestpk','guestPk') 
lc = STRTRAN(lc,'packagecode','packageCode') 
lc = STRTRAN(lc,'packagename','packageName') 
lc = STRTRAN(lc,'roomnumber','roomNumber') 
lc = STRTRAN(lc,'roomtype','roomType') 

= STRTOFILE(lc,'reservation.json') 
MODIFY COMMAND reservation.json


    