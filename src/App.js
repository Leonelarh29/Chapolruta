import { useState } from "react";

const days = [
  {
    id: 1,
    date: "Ma 9 juni",
    city: "Barcelona",
    items: [
      { time: "09:00", type: "sight", title: "Sagrada Família", note: "Tickets vooraf boeken!", emoji: "⛪" },
      { time: "12:30", type: "food", title: "Cervecería Catalana", note: "Tapas — heel populair, vroeg gaan", emoji: "🍽️" },
      { time: "15:00", type: "sight", title: "Park Güell", note: "Gratis gedeelte is ook prachtig", emoji: "🌿" },
      { time: "20:00", type: "night", title: "El Born wijk", note: "Lokale bars en streetfood", emoji: "🌙" },
    ],
  },
  {
    id: 2,
    date: "Di 10 juni",
    city: "Barcelona",
    items: [
      { time: "10:00", type: "sight", title: "La Boqueria markt", note: "Vers fruit en lokale delicatessen", emoji: "🛒" },
      { time: "13:00", type: "food", title: "Bar del Pla", note: "Locals favourite — patatas bravas", emoji: "🍽️" },
      { time: "16:00", type: "activity", title: "Strand Barceloneta", note: "Minder druk na 16u", emoji: "🏖️" },
      { time: "19:30", type: "tip", title: "Bunkers del Carmel", note: "Beste zonsondergang van de stad!", emoji: "✨" },
    ],
  },
  {
    id: 3,
    date: "Wo 11 juni",
    city: "Valencia",
    items: [
      { time: "08:00", type: "activity", title: "Treinreis Barcelona→Valencia", note: "2,5 uur, prachtig uitzicht", emoji: "🚂" },
      { time: "12:00", type: "food", title: "Paella bij de bron", note: "Originele Valenciapaella, niet toeristisch", emoji: "🥘" },
      { time: "15:00", type: "sight", title: "Ciudad de las Artes", note: "Indrukwekkende architectuur, gratis buiten", emoji: "🏛️" },
    ],
  },
];

const typeColors = {
  sight: { bg: "#FFF3CD", accent: "#F59E0B", label: "Beziensw." },
  food: { bg: "#D1FAE5", accent: "#10B981", label: "Eten" },
  activity: { bg: "#DBEAFE", accent: "#3B82F6", label: "Activiteit" },
  night: { bg: "#EDE9FE", accent: "#8B5CF6", label: "Avond" },
  tip: { bg: "#FCE7F3", accent: "#EC4899", label: "Local tip" },
};

const gems = [
  { city: "Barcelona", name: "El Xampanyet", cat: "Bar", tip: "Huiscava voor €2, verborgen steegje", emoji: "🥂" },
  { city: "Barcelona", name: "Granja Viader", cat: "Coffee", tip: "Oudste melkbar van Barcelona, 1870", emoji: "☕" },
  { city: "Barcelona", name: "Carrer del Parlament", cat: "Neighborhood", tip: "Lokale hipster wijk, geen toeristen", emoji: "🏘️" },
  { city: "Valencia", name: "Mercado Central", cat: "Market", tip: "Groter dan La Boqueria, veel goedkoper", emoji: "🧺" },
  { city: "Valencia", name: "El Cabanyal", cat: "Neighborhood", tip: "Visserswijk met street art, authentiek", emoji: "🎨" },
];

export default function Chapolruta() {
  const [activeDay, setActiveDay] = useState(1);
  const [activeTab, setActiveTab] = useState("itinerary");
  const [filterCity, setFilterCity] = useState("All");

  const currentDay = days.find((d) => d.id === activeDay);
  const cities = ["All", ...new Set(gems.map((g) => g.city))];
  const filteredGems = filterCity === "All" ? gems : gems.filter((g) => g.city === filterCity);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      fontFamily: "'Georgia', serif",
      color: "#f0ece0",
      padding: "0 0 60px 0",
    }}>
      <div style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        padding: "20px 24px 16px",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 3, color: "#F59E0B", textTransform: "uppercase", marginBottom: 4 }}>
              My Trip
            </div>
            <h1 style={{ margin: 0, fontSize: 26, fontWeight: "normal", letterSpacing: -0.5 }}>
              🌺 Chapolruta
            </h1>
            <div style={{ fontSize: 13, color: "rgba(240,236,224,0.5)", marginTop: 2 }}>
              9–11 juni · Barcelona & Valencia
            </div>
          </div>
          <div style={{
            background: "rgba(245,158,11,0.15)",
            border: "1px solid rgba(245,158,11,0.3)",
            borderRadius: 12,
            padding: "8px 14px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 20, fontWeight: "bold", color: "#F59E0B" }}>3</div>
            <div style={{ fontSize: 10, color: "rgba(240,236,224,0.5)", letterSpacing: 1 }}>DAYS</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
          {[
            { id: "itinerary", label: "📅 Itinerary" },
            { id: "gems", label: "✨ Local tips" },
          ].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              padding: "8px 18px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontFamily: "Georgia, serif",
              background: activeTab === tab.id ? "#F59E0B" : "rgba(255,255,255,0.08)",
              color: activeTab === tab.id ? "#1a1a2e" : "rgba(240,236,224,0.7)",
              fontWeight: activeTab === tab.id ? "bold" : "normal",
            }}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "20px 20px 0" }}>
        {activeTab === "itinerary" && (
          <>
            <div style={{ display: "flex", gap: 10, marginBottom: 20, overflowX: "auto", paddingBottom: 4 }}>
              {days.map((day) => (
                <button key={day.id} onClick={() => setActiveDay(day.id)} style={{
                  flexShrink: 0,
                  padding: "10px 16px",
                  borderRadius: 14,
                  border: activeDay === day.id ? "2px solid #F59E0B" : "2px solid rgba(255,255,255,0.1)",
                  background: activeDay === day.id ? "rgba(245,158,11,0.15)" : "rgba(255,255,255,0.04)",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#f0ece0",
                  fontFamily: "Georgia, serif",
                }}>
                  <div style={{ fontSize: 11, color: activeDay === day.id ? "#F59E0B" : "rgba(240,236,224,0.4)", letterSpacing: 1 }}>
                    DAY {day.id}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: "bold", marginTop: 2 }}>{day.date}</div>
                  <div style={{ fontSize: 11, color: "rgba(240,236,224,0.5)", marginTop: 1 }}>{day.city}</div>
                </button>
              ))}
            </div>
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", left: 42, top: 0, bottom: 0,
                width: 1, background: "rgba(255,255,255,0.08)",
              }} />
              {currentDay.items.map((item, i) => {
                const style = typeColors[item.type];
                return (
                  <div key={i} style={{ display: "flex", gap: 14, marginBottom: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 44, flexShrink: 0, textAlign: "right" }}>
                      <span style={{ fontSize: 11, color: "rgba(240,236,224,0.4)", fontFamily: "monospace" }}>
                        {item.time}
                      </span>
                    </div>
                    <div style={{
                      width: 10, height: 10, borderRadius: "50%",
                      background: style.accent, flexShrink: 0, marginTop: 5,
                      boxShadow: `0 0 8px ${style.accent}`,
                    }} />
                    <div style={{
                      flex: 1,
                      background: "rgba(255,255,255,0.06)",
                      border: `1px solid rgba(255,255,255,0.08)`,
                      borderLeft: `3px solid ${style.accent}`,
                      borderRadius: 12,
                      padding: "12px 14px",
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ fontSize: 18 }}>{item.emoji}</span>
                          <span style={{ fontSize: 15, fontWeight: "bold" }}>{item.title}</span>
                        </div>
                        <span style={{
                          fontSize: 10,
                          background: `${style.accent}22`,
                          color: style.accent,
                          padding: "2px 8px", borderRadius: 10,
                          flexShrink: 0, marginLeft: 8,
                        }}>
                          {style.label}
                        </span>
                      </div>
                      <p style={{ margin: "6px 0 0", fontSize: 12, color: "rgba(240,236,224,0.55)", lineHeight: 1.5 }}>
                        {item.note}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {activeTab === "gems" && (
          <>
            <p style={{ fontSize: 13, color: "rgba(240,236,224,0.5)", marginBottom: 16, marginTop: 0 }}>
              Experience the City like a Local 💎
            </p>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {cities.map((city) => (
                <button key={city} onClick={() => setFilterCity(city)} style={{
                  padding: "6px 14px", borderRadius: 20,
                  border: "none", cursor: "pointer",
                  fontSize: 12, fontFamily: "Georgia, serif",
                  background: filterCity === city ? "#F59E0B" : "rgba(255,255,255,0.08)",
                  color: filterCity === city ? "#1a1a2e" : "rgba(240,236,224,0.7)",
                  fontWeight: filterCity === city ? "bold" : "normal",
                }}>
                  {city}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filteredGems.map((gem, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14,
                  padding: "14px 16px",
                  display: "flex", gap: 14, alignItems: "flex-start",
                }}>
                  <span style={{ fontSize: 28, flexShrink: 0 }}>{gem.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 15, fontWeight: "bold" }}>{gem.name}</span>
                      <span style={{
                        fontSize: 10, color: "#F59E0B",
                        background: "rgba(245,158,11,0.1)",
                        padding: "2px 8px", borderRadius: 10,
                      }}>
                        {gem.city}
                      </span>
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(240,236,224,0.4)", marginTop: 2 }}>{gem.cat}</div>
                    <p style={{ margin: "6px 0 0", fontSize: 13, color: "rgba(240,236,224,0.65)", lineHeight: 1.5 }}>
                      {gem.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}