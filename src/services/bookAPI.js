export const getBook =async()=>{
    const response = await fetch("http://localhost:3010/books");
    const data =await response.json();
    // console.log(data);//查看所有数据
    return data;
}

export const searchBook =async (query)=>{
    const response = await fetch(`http://localhost:3010/books?q=${query}`);
    const books=await response.json();
    return books;
}

export const updateBook=async(id,shelf)=>{
    const response = await fetch(`http://localhost:3010/books/${id}`,{
    method:"PATCH",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify({shelf:shelf}),
    });

    const book=response.json();
}