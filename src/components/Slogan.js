import Modal from  './Modal.js';

function Slogan() {
    return (
        <>

            <p className="slogan fs-2 text-break" data-aos="fade" data-aos-duration="3000" >Hi, I'm Francesco</p>
            <p className="slogan2 fs-1 text-break" data-aos="fade" data-aos-duration="3000"> Junior Web Developer</p>
            <button type="button" className="fs-1 btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Hire Me</button>
            <Modal/>

        </>
    );
}

export default Slogan;