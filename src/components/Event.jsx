import '../styles/Event.css'
import KTI from "../image/Event.png"
function Event() {
  return (
    <section id="Event" className="event-section">
        <h2>Event Perpustakaan</h2>
        <div className="event-card">
            <div className="event-image">
                <img src={KTI} alt="Event KTI 2025"/>
            </div>
            <div className="event-text">
                <h3>LOMBA</h3>
                <h4>KARYA TULIS ILMIAH 2025</h4>
                <p>"Pengembangan Teknologi Intelektual"</p>
            </div>
        </div>
    </section>
  )
}

export default Event
