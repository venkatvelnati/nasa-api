import React, { useState, useEffect } from "react"
import HttpClient from "./HttpClient"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row} from 'react-bootstrap';
const App = () => {
  const [apod, setApod] = useState({})

  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  return (
    <div style={{ maxWidth: 900, padding: 30 }}>
      <h1>NASA API</h1>
      <h2>Astronomy Picture of the Day</h2>
      {apod && (
        <article>
          <header>
            {apod.title} - <i>{apod.date}</i>
          </header>
          <Container>
            
            <Row>

            <Col>
              <img src={apod.url} alt="APOD" width="800" height="auto" />
            </Col>
            
            <Col>
              <p>{apod.explanation}</p>
              <pre
                style={{
                  overflowX: "auto",
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word",
                }}
              >
              </pre>
            </Col>

            </Row>
          
          </Container>
        </article>
      )}
      <footer>made by venkatram velnati</footer>
    </div>
  )
}

export default App