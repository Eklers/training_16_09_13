function rainbow() {
  document.getElementById('norainbow').disabled = true;
  document.getElementById('norainbow').style.background = '#5d0909';
  document.getElementById('unicornrun').disabled = false;
  document.getElementById('unicornrun').style.background = '#a7d043';

  var paper3 = Raphael(document.getElementById('rainbow'), 500, 250);

  // Unicorn run

  console.log('Start');

  var click = 0;

  document.getElementById('unicornrun').onclick = function() {
    // console.log('count: ' + click);
    click++;

    // For unicorn

    // For unicorn

    if (click / 3 == 1) {
      console.log('unicorn!');
      click = 0;

      var unicorn = paper3.circle(-20, 230, 20).attr({
        fill: '#FFFFFF'
      });

      function run() {
        unicorn.animate({
          cx: 520
        }, 2500, '<>', function() {
          unicorn.animate({
            opacity: 0,
          }, 500);

        });
      }

      run();

    }
  };

  // Unicorn run

  var violet = paper3.path("M140 250L160 250A30 30 60 0 1 340 250L360 250A30 30 120 1 0 140 250").attr({
    fill: '#EE82EE',
    'stroke-width': 1,
    opacity: 0,
  });
  var indigo = paper3.path("M120 250L140 250A30 30 60 0 1 360 250L380 250A30 30 120 1 0 120 250").attr({
    fill: '#4B0082',
    'stroke-width': 1,
    opacity: 0,
  });
  var blue = paper3.path("M100 250L120 250A30 30 60 0 1 380 250L400 250A30 30 120 1 0 100 250").attr({
    fill: '#0000FF',
    'stroke-width': 1,
    opacity: 0,
  });
  var green = paper3.path("M80 250L100 250A30 30 60 0 1 400 250L420 250A30 30 120 1 0 80 250").attr({
    fill: '#008000',
    'stroke-width': 1,
    opacity: 0,
  });
  var yellow = paper3.path("M60 250L80 250A30 30 60 0 1 420 250L440 250A30 30 120 1 0 60 250").attr({
    fill: '#FFFF00',
    'stroke-width': 1,
    opacity: 0,
  });
  var orange = paper3.path("M40 250L60 250A30 30 60 0 1 440 250L460 250A30 30 120 1 0 40 250").attr({
    fill: '#FFA500',
    'stroke-width': 1,
    opacity: 0,
  });
  var red = paper3.path("M20 250L40 250A30 30 60 0 1 460 250L480 250A30 30 120 1 0 20 250").attr({
    fill: '#FF0000',
    'stroke-width': 1,
    opacity: 0,
  });

  violet.animate({
    opacity: 1,
  }, 1000);

  indigo.animate({
    opacity: 1,
  }, 5000);

  blue.animate({
    opacity: 1,
  }, 10000);

  green.animate({
    opacity: 1,
  }, 15000);

  yellow.animate({
    opacity: 1,
  }, 16000, function() {
    violet.animate({
      opacity: 0,
    }, 2000);

    indigo.animate({
      opacity: 0,
    }, 2500);

    blue.animate({
      opacity: 0,
    }, 3000);

    green.animate({
      opacity: 0,
    }, 3500);

    yellow.animate({
      opacity: 0,
    }, 4000);
  });

  orange.animate({
    opacity: 1,
  }, 18000, function() {
    orange.animate({
      opacity: 0,
    }, 3000);
  });

  red.animate({
    opacity: 1,
  }, 19000, function() {
    red.animate({
      opacity: 0,
    }, 3000, function() {
      document.getElementById('unicornrun').disabled = true;
      document.getElementById('unicornrun').style.background = '#5d0909';
      document.getElementById('norainbow').disabled = false;
      document.getElementById('norainbow').style.background = '#a7d043';
    });
  });
}
