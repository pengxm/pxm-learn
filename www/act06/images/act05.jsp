<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>抽奖</title>
<link rel="stylesheet"
	href="${request.contextPath}/dojoroot/dijit/themes/claro/document.css" />
<link rel="stylesheet"
	href="${request.contextPath}/dojoroot/dijit/themes/claro/claro.css" />
<link rel="stylesheet"
	href="${request.contextPath}/web/pg/act05/act05.css" />
<script type="text/javascript"
	src="${request.contextPath}/dojoroot/dojo/dojo.js"
	data-dojo-config="parseOnLoad: true, async:true"></script>
<script type="text/javascript"
	src="${request.contextPath}/web/pg/act05/act05.js"></script>
</head>
<body>
	<div class="container">
	    <img src="images/1.png" id="shan-img" style="display:none;"/>
	    <img src="images/2.png" id="sorry-img" style="display:none;"/>
	    <div class="banner">这是banner</div>
	    <div class="canvasWrap">
	        <div class="turnplate" style="background-image:url(images/turnplate-bg.png);background-size:100% 100%;">
	            <canvas class="item" id="wheelcanvas" width="422px" height="422px"></canvas>
	            <img class="pointer" src="images/turnplate-pointer.png" id="pointer"/>
	        </div>
	    </div>
	    <div class="tab">
	        <ul id="ulTab" class="ulTab">
	            <li class="rule">游戏规则</li>
	            <li class="record">中奖纪录</li>
	        </ul>
	        <div class="divTab" id="rule">
	            <dl>
	                <dt>活动时间</dt>
	                <dd>6月1日 至 6月5日</dd>
	            </dl>
	            <dl>
	                <dt>活动细则</dt>
	                <dd>盼望着,盼望着,东风来了,春天的脚步近了盼望着,盼望着,东风来了,春天的脚步近了盼望着,盼望着,东风来了,春天的脚步近了盼望着,盼望着,东风来了,春天的脚步近了盼望着,盼望着,东风来了,春天的脚步近了</dd>
	            </dl>
	        </div>
	        <div class="divTab prizeRecord" id="record">
	            <ul id="scrollUl">
	                <li>6月1日中奖情况: 20M流量包</li>
	                <li>6月1日中奖情况: 20M流量包</li>
	                <li>6月1日中奖情况: 20M流量包</li>
	                <li>6月1日中奖情况: 20M流量包</li>
	                <li>6月1日中奖情况: 20M流量包</li>
	                <li>6月1日中奖情况: 20M流量包</li>
	                <li>6月1日中奖情况: 20M流量包</li>
	                <li>6月1日中奖情况: 50M流量包</li>
	            </ul>
	        </div>
	    </div>
	    <div class="popup" id="popup">
	        <div class="alert">
	            <img class="smile" src="images/smile_01.png" alt="">
	            <h2 id="prizeT">恭喜你获得50M流量</h2>
	            <div class="btn">确定</div>
	        </div>
	    </div>
	</div>
</body>
</html>