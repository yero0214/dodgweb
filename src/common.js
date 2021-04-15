const validation = function valCheck(email,pwd){
    if(email == ''){
        return 'Enter an email';
    } 
    else if(pwd == ''){
        return 'Enter a password'
    }
    return '';
}

export {validation};