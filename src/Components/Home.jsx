import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
  return (
    <Container>
      <Section
        title="Model-S"
        description="Order Online for Touchless Delievery"
        backgroungImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing-inventery"
      />
      <Section
        title="Model-Y"
        description="Order Online for Touchless Delievery"
        backgroungImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing-inventery"


      />
      <Section

        title="Model S"
        description="Order Online for Touchless Delievery"
        backgroungImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing-inventery"



      />
      <Section
        title="Model-X"
        description="Order Online for Touchless Delievery"
        backgroungImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing-inventery"

      />


      <Section
        title="Lowest Cost Solar Panels in [India]"
        description="Money-back guarantee"
        backgroungImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar For New Roofs"
        description="Solar Roof Costs Less Than A New Roof Plus Solar Panels "
        backgroungImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroungImg="accessories.jpg"
        leftBtnText="Order now"
      />

    </Container>
  )
}

export default Home
 const Container = styled.div
   `
 height: 100vh;

`