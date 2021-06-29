import * as React from "react"


const Form = () => (
    <div id="signup" className="section">
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <h3 className="title is-3 label">Shoot us an Email</h3>
          <form style={{ 'padding': '3px', 'textAlign': 'center' }} action="https://formspree.io/f/xjvjovrg" method="post" target="popupwindow" onsubmit="window.open('https://formspree.io/f/xjvjovrg', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
            <div className="field is-grouped">
              <div className="control is-expanded">
                <input className="input" type="email" name="email" id="tlemail" placeholder="Your email here" />
                <input type="hidden" value="1" name="embed" />
              </div> 
              <br></br>
              <div className="control is expanded">
              <input className="input" type="text" name="message" id="message" placeholder="Your message here" />
              </div>
              <br></br>
              <div className="control">
                <button className="button is-white">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        .title {
          color: black;
          text-align: center;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
  
  export default Form