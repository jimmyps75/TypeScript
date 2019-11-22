function getName(
    firstName: string,
    lastName?: string):string{
        if (lastName == undefined){
            return      firstName;
        }
        return  `${firstName} ${lastName}`   ;
    };
document.write(getName("jesus",'perez'));

