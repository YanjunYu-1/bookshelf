export const getBook =async()=>{
    const response = await fetch("http://localhost:3010/books");
    const data =await response.json();
    // console.log(data);//查看所有数据
    return data;
}