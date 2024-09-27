import './ContactInfo.css';

const ContactInfo = () => {
    const contactDetails = [
      {
        icon: '📍',
        title: 'Address',
        description: 'Enrrique Arze Street,\nCochabamba Bolivia'
      },
      {
        icon: '📞',
        title: 'Contact Number',
        description: '+591 76460689'
      },
      {
        icon: '✉️',
        title: 'Email Address',
        description: 'edson.almanza1@gmail.com'
      },
      {
        icon: '🌐',
        title: 'Website',
        description: 'edson.almanza1.com'
      }
    ];

    return (
      <div className="contact-info-container">
        <div className='contact-info-title'>
          <h1>Contact me also by: </h1>
        </div>
        {contactDetails.map((item, idx) => (
          <div className="contact-info-card" key={idx}>
            <div className="contact-info-icon">{item.icon}</div>
            <h3 className="contact-info-card-title">{item.title}</h3>
            <p className="contact-info-description">{item.description}</p>
          </div>
        ))}
      </div>
    );
  };

  export default ContactInfo;