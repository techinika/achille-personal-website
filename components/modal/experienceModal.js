

export default function ExperienceModal({title, data, setOpen}){
    return (
        <div>
            <div className="modal">
            
                <div className="fullScreen"></div>
               
                <div className="datas">
                    <div className="data-header">
                        <h2>Experiences at {title}</h2>
                        <button className="btn" onClick={()=> setOpen(false)}>X</button>
                    </div>
                    {data && data.reverse().map(d => (
                        <div key={d.id} className="data">
                            <div className="data-header">
                                <h3>Role: {d.role}</h3>
                                <p className="text-sm">From <span style={{fontWeight: "bold"}}>{d.From}</span> to <span style={{fontWeight: "bold"}}>{d.To}</span></p>
                            </div>
                            <h4>Responsibilities:</h4>
                            <ul>
                                {d.Responsibilities && d.Responsibilities.reverse().map(res => (
                                    <li key={res} className="data-list">
                                        {res}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}