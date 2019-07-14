SELECT distinct in_guest.guestnum as pk, title,last as LastName, first as FirstName, address1 as Company, address2 as address,city,state,zip,country,;
  pPhoneNum as phonenumber, email as emailaddress, '' AS properName ;
  FROM in_guest ;
  LEFT JOIN in_phonm on pacct = 'G' and pacctnum = guestnum and pcode = '1' ;
  LEFT JOIN in_email on rectype = 'G' and in_email.guestnum = in_guest.guestnum and pcode = '1' AND primary ;
  WHERE in_guest.GuestNum in (SELECT guestnum FROM in_res WHERE INLIST(in_res.level,'NEW','CNF')) ;
  ORDER BY Last,First ;
  INTO CURSOR FUNG 
   
lc = nfCursorToJson(.T.)

lc = STRTRAN(lc,'lastname','lastName') 
lc = STRTRAN(lc,'firstname','firstName') 
lc = STRTRAN(lc,'phonenumber','phoneNumber') 
lc = STRTRAN(lc,'emailaddress','emailAddress') 
lc = STRTRAN(lc,'propername','properName') 

= STRTOFILE(lc,'guest.json') 
MODIFY COMMAND guest.json


    