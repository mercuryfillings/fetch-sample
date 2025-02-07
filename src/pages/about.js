// Step 1: Import React
import * as React from 'react'
import Counter from '../Components/Counter'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
        <Counter />
    </main>
  )
}
export const Head = () => <title>About Me</title>
// Step 3: Export your component
export default AboutPage