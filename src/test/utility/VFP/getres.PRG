SELECT resno as pk,guestNum as guestPk,arrival,depart,level,name,; 
  package as packageCode, SPACE(1) as package, in_RATES.RDESC as packageName,;
  unit as roomNumber, in_unit.utype as roomType from in_res ;
  left join in_rates on rcode = package ;
  left JOIN in_unit on in_res.unit = in_unit.unum ;
  WHERE share = ' ' ;
    AND level in ('NEW','CNF') ;
    AND GUESTNUM <> '000000' ;
  ORDER BY name ;
    INTO CURSOR FUNG 
   
lc = nfCursorToJson(.T.,.F.,.F.,.T.)
lc = STRTRAN(lc,'guestpk','guestPk') 
lc = STRTRAN(lc,'packagecode','packageCode') 
lc = STRTRAN(lc,'packagename','packageName') 
lc = STRTRAN(lc,'roomnumber','roomNumber') 
lc = STRTRAN(lc,'roomtype','roomType') 

#DEFINE kFileName 'reservation.json'
LOCAL laLines(1),lcLine
ALINES(laLines,lc)
ERASE (kFileName)
FOR EACH lcLine IN laLines
  * "arrival":"2016-04-12T00:00:00Z",
  * "depart":"2016-04-14T00:00:00Z",
  IF ALLTRIM(lcLine) = ["arrival":] OR ALLTRIM(lcLine) = ["depart":]
    lcLine = STRTRAN(lcLine,'":"', '": new Date("')
    lcLine = STRTRAN(lcLine,':00Z"', ':00Z")')
  ENDIF             
  STRTOFILE(lcLine+CHR(13)+CHR(10),kFileName,.T.) 
NEXT 
MODIFY COMMAND (kFileName)


    