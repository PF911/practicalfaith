import { SplashScreen } from '@capacitor/splash-screen';

window.customElements.define(
  'capacitor-welcome',
  class extends HTMLElement {
    constructor() {
      super();
      SplashScreen.hide();

      const root = this.attachShadow({ mode: 'open' });

      root.innerHTML = `
        <style>
          :host {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
            text-align: center;
            padding: 20px;
            box-sizing: border-box;
          }
          img {
            max-width: 220px;
            margin-bottom: 20px;
          }
          h1 {
            font-size: 1.4em;
            margin: 10px 0;
          }
          p {
            color: #555;
            margin-bottom: 25px;
          }
          button {
            font-size: 1em;
            padding: 12px 20px;
            border: 1px solid #333;
            border-radius: 6px;
            background: #fff;
            color: #333;
            cursor: pointer;
          }
        </style>

        <img src="./assets/practical-faith-logo.png" alt="Practical Faith">
        <h1>Practical Faith</h1>
        <p>Making the Bible Relevant for Today’s Living</p>

        <button id="saveBtn">⭐ Save Teaching</button>
      `;

      root.querySelector('#saveBtn').addEventListener('click', () => {
        window.location.href = 'saved.html';
      });
    }
  }
);
