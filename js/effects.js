export const init = () => {

  const slider = document.querySelector('.effect-level__slider');
  const effects = document.querySelector('.img-upload__effects');
  //const effectValue = document.querySelector('.effect-level__value');
  const img = document.querySelector('.img-upload__preview img');
  const effectLevel = document.querySelector('.img-upload__effect-level');

  slider.classList.add('hidden');
  effectLevel.classList.add('hidden');

  const filterSettings = {
    none: {
      range: {
        min : 2,
        max : 100},
      step : 1,
      unit: ''
    },
    grayscale: {
      range: {
        min : 0,
        max : 1},
      step : 0.1,
      unit: ''
    },
    sepia: {
      range: {
        min : 0,
        max : 1},
      step : 0.1,
      unit: ''
    },
    invert: {
      range: {
        min : 0,
        max : 100},
      step : 1,
      unit: '%'
    },
    blur: {
      range: {
        min : 0,
        max : 3},
      step : 0.1,
      unit: 'px'
    },
    brightness: {
      range: {
        min : 1,
        max : 3},
      step : 0.1,
      unit: ''
    }
  };

  const filtersMapping = {
    none: 'none',
    chrome: 'grayscale',
    sepia: 'sepia',
    marvin: 'invert',
    phobos: 'blur',
    heat: 'brightness'
  };


  const sliderCreate = ({ range, step }) => {
    noUiSlider.create(slider, {
      start: range.max,
      range: range,
      step: step
    });
    //sliderElement.noUiSlider.on('update', onSliderUpdate);
  };
  sliderCreate(filterSettings.none);

  let selectedFilter = 'none';
  let filterValue;

  const updateFilter = () => {
    const styleName = filtersMapping[selectedFilter];
    const settings = filterSettings[styleName];
    // console.log('afterTransform', style);

    // console.log('checkFilterOptions', filterSettings[style]);

    //console.log(evt.target);
    // console.log('check settings', settings.range);
    const style = (
      selectedFilter === 'none'
        ? ''
        : `${styleName}(${filterValue}${settings.unit})`
    );
    img.style.filter = style;
    // console.log('imgfilter', img);
  };

  effects.onclick = (evt) => {
    selectedFilter = evt.target.id.replace('effect-','');
    const style = filtersMapping[selectedFilter];
    if (style === 'none') {
      slider.classList.add('hidden');
      effectLevel.classList.add('hidden');
    } else {
      effectLevel.classList.remove('hidden');
      slider.classList.remove('hidden');
      const settings = filterSettings[style];
      // slider.noUiSlider.destroy();
      slider.noUiSlider.updateOptions(settings);
      filterValue = settings.range.max;
      slider.noUiSlider.set(filterValue);
    }
    updateFilter();
  };

  slider.noUiSlider.on('change', () => {
    filterValue = slider.noUiSlider.get();
    updateFilter();
  });
};
