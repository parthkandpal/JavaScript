const convertTORs = (dollar) => {
if (typeof(dollar === Number)){
    return dollar * 64
}else{
    throw error('Amount needs to be in number');
    }
}



try{
    console.log(convertTORs('a'))
}catch(e){
    console.log(e)
}