import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import DetalleBanda from './DetalleBanda';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const { useEffect, useState } = require("react");

function ListarBandas() {
    const [bands, setBands] = useState([]);

    useEffect(() => {
        const URL = "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
        fetch(URL).then(data => data.json()).then(data => {
            setBands(data);
        })
    }, []);

    const currentYear = 2022;
    let mostYears = 0;
    let bandName = "";

    const bandaAntigua = () => {
        let time = 0;
        for (let i = 0; i < bands.length; i++) {
            time = currentYear - parseInt(bands[i].foundation_year);
            if (time > mostYears) {
                bandName = bands[i].name;
                mostYears = time;
            }
        }

        return (
            <p style={{ float: 'center' }}>La banda más antigua es {bandName} y fue fundada hace {mostYears} años</p>
        )
    }

    bandaAntigua();

    const showDetail = () => {
        return (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body className="mb-3">
                  
                </Card.Body>
              </Card>
            </Col>
          );
    };

    return (
        <Row>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">País</th>
                        <th scope="col">Género</th>
                        <th scope="col">Fundación</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bands.map((band) => (
                            <tr>
                                <td>{band.id}</td>
                                <td>{band.name}</td>
                                <td>{band.country}</td>
                                <td>{band.genre}</td>
                                <td>{band.foundation_year}</td>
                                <td>
                                    <Button variant="primary" onClick={showDetail}>
                                        detail
                                    </Button>
                                </td>
                            </tr>))
                    }
                </tbody>
            </table>
            <>{bandaAntigua()}</>
            <Row>
                {bands.map(bandx => <Col><DetalleBanda bandx={bandx} key={bandx.id} /></Col>)}
            </Row>
        </Row>
    )
}

export default ListarBandas;