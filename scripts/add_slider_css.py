path = "src/index.css"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

slider_css = '''
/* Sybiosme Tactile Range Slider */
input[type="range"].sybiosme-slider {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
}

input[type="range"].sybiosme-slider::-webkit-slider-runnable-track {
  height: 8px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

input[type="range"].sybiosme-slider::-moz-range-track {
  height: 8px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

input[type="range"].sybiosme-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  margin-top: -8px;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background: #FF4A1C;
  border: 3px solid #ffffff;
  box-shadow: 0 0 16px rgba(255, 74, 28, 0.7), 0 2px 8px rgba(0, 0, 0, 0.6);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
}

input[type="range"].sybiosme-slider::-webkit-slider-thumb:hover,
input[type="range"].sybiosme-slider::-webkit-slider-thumb:active {
  transform: scale(1.18);
  box-shadow: 0 0 24px rgba(255, 74, 28, 0.95), 0 4px 14px rgba(0, 0, 0, 0.7);
}

input[type="range"].sybiosme-slider::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background: #FF4A1C;
  border: 3px solid #ffffff;
  box-shadow: 0 0 16px rgba(255, 74, 28, 0.7), 0 2px 8px rgba(0, 0, 0, 0.6);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
}

input[type="range"].sybiosme-slider::-moz-range-thumb:hover,
input[type="range"].sybiosme-slider::-moz-range-thumb:active {
  transform: scale(1.18);
  box-shadow: 0 0 24px rgba(255, 74, 28, 0.95), 0 4px 14px rgba(0, 0, 0, 0.7);
}
'''

if 'sybiosme-slider' not in content:
    content += slider_css
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Added .sybiosme-slider styles to src/index.css")
else:
    print(".sybiosme-slider already present in src/index.css")
