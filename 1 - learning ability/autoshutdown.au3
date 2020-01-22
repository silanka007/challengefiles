#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_Compile_Both=y
#AutoIt3Wrapper_UseX64=y
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****
;finally Eureka!!!!!

Opt("MouseCoordMode", 0)
Send("#r")
WinWait("Run")
WinActivate("Run")
Send("shutdown /s")

MouseClick("primary", 166, 181, 1, 0);