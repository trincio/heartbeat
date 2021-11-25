//determines 


class heartbeat{
	
	constructor(fastresponseURL, periodicity, timeout , callercallbackBeat = function(){},callercallbackBreak = function(){}, guiSettingsObj = null) {
		
		this.info();
		
		if (periodicity<timeout+50) throw ("❤️ heartbeat  - Each heartbeat must consider the timeout of the beat. ❤️");
		
		this.fastresponseURL=fastresponseURL;           //what URL has to be called to get the heartbeat
		this.periodicity=periodicity;                   //how many time between the heartbeats
		this.timeout=timeout;                           //timeout to declare the heartbreak
		this.currenttimeoutID=null;                     //timeout ID of the setTimeout
											            
		this.xhttp = new XMLHttpRequest();	            //must have a XMLHttpRequest to handle the requests (and use local variables/members if needed.)
		this.callercallbackBeat = callercallbackBeat;   //the callback to call when the heartbeat has reached	
		this.callercallbackBreak = callercallbackBreak; //the callback to call when the heartbeat has reached	
		this.started = false;
 
 
		return 0;
		
	}
	
	
	start = function(flag_show){
		if (this.started) console.log ("❤️ heartbeat - ALREADY STARTED. ❤️");
		else{
			this.started = true;
			this.currenttimeoutID = setTimeout(this.checkUrl, this.periodicity, this); //important: passing this to the function to selfreferencing the class 	
		}
	}


	stop = function(flag_show){
		if (this.started)
		{
			console.log ("🛑 heartbeat - STOPPED. 🛑");
			this.started = false;
 		}
	}

	
	beat = function(flag_show){
		if (this.started){
			this.currenttimeoutID = setTimeout(this.checkUrl, this.periodicity, this); //important: passing this to the function to selfreferencing the class 	
		}
	}	
	
	nextBeat = function(){
		
		console.log ("❤️ heartbeat - Going to the next one... ❤️");
		this.callercallbackBeat();
		this.beat();
		
	}
	
	handleTimeoutThenProceed = function(){
		
		console.log ("💔 HEARTBREAK - the heart haven't beaten in less than "+this.timeout+" ms. Arrhythmia? Trying again... 💔");
		this.callercallbackBreak();
		this.beat();		
	}	
	
	
	
	checkUrl = function(self){
		var current_HB = self;
		console.log("checking the url (timeoutid = "+current_HB.currenttimeoutID+")");
		
		current_HB.xhttp.onreadystatechange = function() {
	 
			if (this.readyState == 4 && this.status == 200) {
				current_HB.nextBeat();
			}
		};		
		
		current_HB.xhttp.timeout = current_HB.timeout;  
		current_HB.xhttp.ontimeout = function () {current_HB.handleTimeoutThenProceed();}
 
		current_HB.xhttp.open("GET", current_HB.fastresponseURL, true);
		current_HB.xhttp.send();		
 
		
	}
	
	

	info = function(){
console.log("		                                                                                                                                                                       ");
console.log("                                                                                                                                                                              "); 
console.log("                                              ____                                                                           ________                                         "); 
console.log("                                       __æggggOOOOOggggæ__                                                            {__gggOææ#¶¶¶¶##æægæ__                                  "); 
console.log("                                   __gggæª¶7l__L _gææ###æægg__                                                     __ggOOOOgæ__7#gg¶¶##æææ¶¶#g__                              "); 
console.log("                                _ggg#¶lggæ#¶gOã_gªÑ        Ñ7¶#æ_                                                _g#¶7Ñ      Õ¶ææmæg,     Ñ7ãææ£ææ_                           "); 
console.log("                              _gO#¶ggæ¶7  _gg# g¶               7æ                                               ¶              ¶g gg__       Ñ¶ææãg_                         "); 
console.log("                            _gO#¶gæ¶Ñ  _ggª¶gæmO_                                                                               ¼O¶_æ¶¶æg__      7ggOæy                       "); 
console.log("                           _gæ¶gæ¶   _gg¶gæ¶Õ#gOg_                                          ,                                  {gOgæ7¶#gæ¶g_       ¶OOg,                      "); 
console.log("                          _OOgO¶    _gOO#Ñ    7gOOg__                            6y        _¶                ___________     __gOg¶     7æOOg       ¶OOgy                     "); 
console.log("                          gOOO¶    _OOæ¶        ªæ¶¶lægggggOggggggæ___           Gæ        g¶          __ggggææ##¶¶¶¶¶##æggæ_7ªæ¶         ¶Og_       ªOOæ                     "); 
console.log("                         gOOOã    ½OOg        __gggæ#¶7ÑÑ      __7¶ªOOgg__ =_    Gg       ½O¶    g___ggOOg¶==æææ_____     7¶#Ogæ_          gOg        gOO,                    "); 
console.log("                         gOOO¶    gOO¶      _ggO#¶     __ægggææ######æOOOOgggæ_  gO¶      ÆO¶ _ggOOOOOOO¶7¶Ñ¶¶777f¶¶#ggæ_y   Ñãggg_        GOOy       ¶OOg                    "); 
console.log("                         OOOO     OOg      gOOãÑ    {_gO#¶¶y          #¶¶#ægOOgg_gO¶      GOggOOOæO#7777            gg¶#Ogæy    ªOOæy       OO¶       ½OOg                    "); 
console.log("                         OOOO     gO¶     gOOã     _gO#_gOOg                7¶gOOæO¶      Gg#OO#¶ [               _gO#¶g_#Og_    ¶OOg,      gO¶       ½OO¶                    "); 
console.log("                         gOOO     ¶O¶    ½OOO¶     gOg½æ7¶Og___L               ¶OgO       mggæÑ             ¶_gggæ#¶¶   ð ªOg_    gOOæ      gO¶       ½OO¶                    "); 
console.log("                         ¶OOO      g¶    mOOO¶     OOg{   7¶æOgæª               ¶Og        gO¶               Ñ¶#¶          OOg    GOOg      gg        gOg¶                    "); 
console.log("                          gOOy     Ggy    gOOg     gOgy      77Ñ                 ¶¶         Ñ                              OOg    gOOã     gg        WgOª                     "); 
console.log("                          GOO¶      ðæ    mgOgy    mgOg                                                                    OOã    gOg¶    _ã        {gOª                      "); 
console.log("                           ¶Og       Õæ    ÕgOg,    mgOæ     www.gabrielemotta.com                                       {gO#    gOg¶    _¶        {gg¶                       "); 
console.log("                            ªOg       {æy   {#Og_     #Oæ                                                               _gO¶   _gOæ¶    g¶        _gæÑ                        "); 
console.log("                             ªg_        ¶_    7ægæ_    7gæy      Heartbeat                                             gg#Ñ   ggg¶    _¶         gg¶                          "); 
console.log("                              Ggæ        Õæ_    7ægæ_   {¶g_                                                         _gæ¶   _gg¶    _¶         _g¶                            "); 
console.log("                                ¶æy        Õæ_    7#gæ_   Õ#g_        Checks periodically if an endpoint           _gæ¶  __gæ¶    Lf         _æ¶                              "); 
console.log("                                 7æ_         Ñt     Ñãgg_y  7#g_          is reachable.                         __g#7  _ggª¶   _=¶         _æ¶                                "); 
console.log("                                   7æ_                 7#gæ_  Õægæ_                                           _gg¶Ñ _gg#7               _g#¶                                  "); 
console.log("                                     7æ_                 Ñ7#gæ_  7æg_y         Useful for offline          _gg#7 _gg#7                _æ¶                                     "); 
console.log("                                       Ñ¶Ly                  7#gæ_ Ñ¶æg_y         web apps or PWAs.     _ggª7{_gæ¶7                _æ¶Ñ                                       "); 
console.log("                                          Õ¶_                   Õãææ_y[¶ææ_                          _ggª7__g#¶Ñ                _L¶Ñ                                          "); 
console.log("                                             7¥_                   Ñ7#g__[¶ææ_                    _¥gª7_gæ¶7                 {LHÑ                                             "); 
console.log("                                                74_                    7¶ææ_Õ¶g_y               _g#7_gæ¶Ñ                 _¼¶¶                                                "); 
console.log("                                                  Ñ74_                    [¶ææ_7#æ_          _gæ¶_g#¶                  _4f                                                    "); 
console.log("                                                     Ñ7¥_                    Ñfææ_¶æ_      _g¶_g#7                  L¶7                                                       "); 
console.log("                                                         7=L_                   Õ¶æ_ææ_ _gæ7_#¶                 _4¶                                                           "); 
console.log("                                                            Ñ7+                   Ñææ@æ_¶_g¶Ñ                                                                                 "); 
console.log("                                                                                   __#æ¶æ7¶                                                                                   "); 
console.log("                                                                                 ¶g#lg7g@g_                                                                                   "); 
console.log("                                                                                _gãgªÑ Õg@g_                                                {                                 "); 
console.log("                                            ___ææ_,                             gggg    ñg¶g                                   ________ææ=gggæ===æ_____                       "); 
console.log("                                       __=#¶7lgOg¶¶           _æg#              OgOg     gæO                           __æggggæææ##¶¶¶¶gOæ¶7777777777¶¶#æ_                    "); 
console.log("                                  __=#¶Ñ  _ggOæ¶           _¥gæ¶Ñ               ªOOg_    gOg                         =ææª¶7¶       _gggª7               {gy                   "); 
console.log("                                #¶7     _ggæ¶Ñ          __gO#7                   ¶OOg_  gOg¶                                    __gO#7               __gg#                    "); 
console.log("                                     _gggª7           _ggæ¶                       7æOgææO#¶                                  __ggæ¶           ____gggæ#¶Ñ                     "); 
console.log("                                  _ggO#¶           _ggg#7                         _gðgOg_                                 {_ggæ¶_______æggggææ##¶f7¶                          "); 
console.log("                               {_gOæ¶¶          {_gOæ¶                           gOæ¶ ¶OOæ                              ggggæ######æææ£¶l__y                                  "); 
console.log("                        ______ggO¶_____________ggOO¶____                        ¼OO¶   ªOO,                          __gO#¶              Ñ7¶#æ_                               "); 
console.log("             ___æææ#¶¶¶f77¶¶Og#77777¶¶¶¶¶ÑÑÑ_gOg¶¶                              GOO    ÆOO¶                        _ggæ¶¶                    Ggg                              "); 
console.log("         _ægæª7Ñ       _ggO#¶            _ggO#7                                 mgO_   gOª                      _ggOæ¶                     {_gg¶                              "); 
console.log("      _gg#¶         _ægO#¶             _gOg¶Ñ                                    {#gæ gæ¶                    __gOægã                    __ggæ¶                                "); 
console.log("     gg¶Ñ       {_ggg#¶             _ggO#¶                                         7æg¶                    _gggª¶ g_               __æggg#¶Ñ                                  "); 
console.log("    gg¶      __ggæ¶7               gggªÑ                                           ¼g7g_                  æO#¶    Õ#gg=æ____æ=gggggæ#¶7¶                                      "); 
console.log("    {#æ__æggæ#¶7                   77                                              g¶  g_                            Ñ77f¶¶¶ff77¶                                             "); 
console.log("        ÑÑ                                                                         O¶  Æg                                                                                     "); 
console.log("                                                                                   g¶   O                                                                                     "); 
console.log("                                                                                   mæ  ¼g                                                                                     "); 
console.log("                                                                                    Õg_ã                                                                                      "); 
console.log("                                                                                    _=¶y                                                                                      "); 
console.log("                                                                                  ¼f   Õ=                                                                                     "); 
console.log("                                                                                                                                                                              "); 
console.log("                                                                                                                                                                              "); 
console.log("		                                                                                                                                                                       ");
		
	}		
			


	
}