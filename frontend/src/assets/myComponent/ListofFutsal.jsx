import pic from '../images/active_futsal.jpg' ;


const centres1 = {
    display:"grid",
    /* border: 3px solid; */
    height: "50px",
    borderRadius:" 40px",
    padding:" 30px",
    boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

const centres2 = {
    border:" 3px" ,
    height: "50px",
    borderRadius: "40px",
    padding:"30px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

const centres3 = {
    border: "3px",
    height:" 50px",
    borderRadius: "40px",
    padding: "30px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

const centres4= {
    border: "3px",
    height: "50px",
    borderRadius: "40px",
    padding: "30px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

const centres5  ={
    border: "0px solid",
    height:" 200px",
    borderRadius: "40px",
    padding: "30px",
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "25% 75%",
    textDecoration: "none",
    fontSize: "1.5rem",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

}

const wrapper ={
    paddingLeft: "30px",
    paddingRight: "30px",
    display: "grid",
    gap: "1rem",
}

const nested= {
    padding: "0px",
    margin: "0px",
    border: "2px solid rgb(255, 255, 255)",
    borderRadius: "50px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    // backgroundColor: "rgb(255, 0, 0)", 
    gridRow: "1/4", 
    gridColumn: "1/2"
}

const nested1= {
    padding: "10px",
    margin: "0px",
    border: "1px salmon",
    borderRadius: "30px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    backgroundColor: "rgb(255, 255, 255)" 

}


const img = {

    width: "100%",
    height: "100%",
    borderRadius: "50px",

}
function Listof() {
    return (
        <>
         <div style={wrapper}>
            <div>
                <a style={centres5} href="./Active">
                    <div style={nested} ><img style={img}src={pic} /></div>
                    <div style={nested1} >Active Futsal</div>
                    <div style={nested1} >location:lalitpur</div>
                    <div style={nested1} >open now </div>
                </a>
            </div>
            <div style={centres1}>Centre-02</div>
            <div style={centres2}>Centre-03</div>
            <div style={centres3}>Centre-04</div>
            <div style={centres4}>Centre-05</div>

            </div>
        </>

    );
}     

export default Listof ;