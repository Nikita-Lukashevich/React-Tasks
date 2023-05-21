import './Contact.css'

const Contact = ({contact}) => {

    const cityAddress = contact.address ? contact.address.city : null;

    return (
        <div className="contact">
            <p>{contact.id}. {contact.name} {contact.username} Email:{contact.email} City:{cityAddress}</p>
        </div>
    );
};

export default Contact

