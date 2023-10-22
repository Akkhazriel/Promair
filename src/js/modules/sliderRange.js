import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export function rangeSlider() {
    const priceRangeSlider = document.querySelectorAll('.form__price-slider');

    if(priceRangeSlider) {
        priceRangeSlider.forEach(slider => {

            noUiSlider.create(slider, {
                start: [0, 999999],
                connect: true,
                step: 1,
                range: {
                    'min': [500],
                    'max': [999999]
                }
            });

            const input0 = document.querySelector('#input-0');
            const input1 = document.querySelector('#input-1');
            const inputs = [input0, input1];

            slider.noUiSlider.on('update', function(values, handle) {
                inputs[handle].value = Math.round(values[handle]);
            });

            const setRangeSlider = (i, value) => {
                let arr = [null, null];
                arr[i] = value;

                console.log(arr);

                slider.noUiSlider.set(arr);
            };
            
            inputs.forEach((el, index) => {
                el.addEventListener('change', (e) => {
                    setRangeSlider(index, e.currentTarget.value);
                });
            });
        });
    }

}