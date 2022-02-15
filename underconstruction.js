var startTime, percentageCompletion = 0;

$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "underconstruction.xml?" + Math.random(),
        dataType: "xml",
        success: parseXml
    });
});

function parseXml(xml){
    $(xml).find("percentage-of-completion").each(function(){
        percentageCompletion = $(this).text();
        $('#percentage-text').hide();
        $('#percentage-bar').css('width', '1%');
        $(document).ready(function(){
            $('#percentage-bar').animate({'width': percentageCompletion + '%'}, percentageCompletion * 100, function(){
                $('.pre').html(percentageCompletion + '%');
                $('#percentage-text').css('margin-left', percentageCompletion * 703 / 100 - 20).show();
                setCufon();
            });
        });
    });
    $(xml).find("start-date-time").each(function(){
        startTime = Date.parse($(this).text());
    });
    $(xml).find("template-number").each(function(){
        changeStyle($(this).text());
        timeLeft();
        $('.panel a').each(function(key, value){
            $(this).click(function (){
                changeStyle(key + 1);
                return false;
            });
        });
    });
}

function changeStyle(num){
    if (num > 0 && num < 6){
        $('body').removeClass().addClass('' + num);
    }
}

function setCufon(){
	Cufon.replace('.digit', { fontFamily: 'Yanone Kaffeesatz Regular', hover: 'true' });
	Cufon.replace('#percentage-text span, .alpha', { fontFamily: 'Yanone Kaffeesatz Regular', hover: 'true' });
}

function timeLeft(){
    var
        now = new Date(),
        totalSec = parseInt(startTime - now) / 1000,
        month = Math.floor(totalSec / 60 / 60 / 24 / 31),
        kM = month * 60 * 60 * 24 * 31,
        days = Math.floor((totalSec - kM) / 60 / 60 / 24),
        kD = days * 60 * 60 * 24,
        hours = Math.floor((totalSec - kM - kD) / 60 / 60),
        kH = hours * 60 * 60,
        min = Math.floor((totalSec - kM - kD - kH) / 60),
        sec = Math.floor((totalSec - kM - kD - kH - min * 60)),
        fmonth = 0, smonth = 0,
        fday = 0, sday = 0,
        fhour = 0, shour = 0,
        fmin = 0, smin = 0,
        fsec = 0, ssec = 0;
        
    if (totalSec > 0){
        if (month < 10){
            smonth = month;
        } else {
            fmonth = month.toString().substr(0, 1);
            smonth = month.toString().substr(1, 1);
        }
        $('#launch-time li.digit:eq(0)').text(fmonth);
        $('#launch-time li.digit:eq(1)').text(smonth);
        
        if (days < 10){
            sday = days;
        } else {
            fday = days.toString().substr(0, 1);
            sday = days.toString().substr(1, 1);
        }
        $('#launch-time li.digit:eq(2)').text(fday);
        $('#launch-time li.digit:eq(3)').text(sday);
        
        if (hours < 10){
            shour = hours;
        } else {
            fhour = hours.toString().substr(0, 1);
            shour = hours.toString().substr(1, 1);
        }
        $('#launch-time li.digit:eq(4)').text(fhour);
        $('#launch-time li.digit:eq(5)').text(shour);
        
        if (min < 10){
            smin = min;
        } else {
            fmin = min.toString().substr(0, 1);
            smin = min.toString().substr(1, 1);
        }
        $('#launch-time li.digit:eq(6)').text(fmin);
        $('#launch-time li.digit:eq(7)').text(smin);
        
        if (sec < 10){
            ssec = sec;
        } else {
            fsec = sec.toString().substr(0, 1);
            ssec = sec.toString().substr(1, 1);
        }
        $('#launch-time li.digit:eq(8)').text(fsec);
        $('#launch-time li.digit:eq(9)').text(ssec);
        
        setCufon();
        
        setTimeout(timeLeft, 1000);
    }
}
