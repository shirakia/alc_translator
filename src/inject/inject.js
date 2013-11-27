// html header
replace_text($('title'), 'の検索結果', ' results');
replace_text($('title'), '件', '');
replace_text($('title'), '英辞郎', 'Eijiro');

// header area
replace_text($('#topuser'), /こんにちは.+さん ｜/, '');
replace_text($('#topuser'), 'ご利用ガイド', 'Help');
replace_text($('#topuser'), 'ログアウト', 'Log out');

replace_text($('#topmenu'), /小窓モード/g, 'Small Window');
replace_text($('#topmenu'), /検索履歴/g, 'Search History');
replace_text($('#topmenu'), /単語帳/g, 'Wordbook');
replace_text($('#topmenu'), /環境設定/g, 'Settings');

replace_text($('.slogan .edp'), 'データ提供：', 'Data provided by ');
replace_text($('.slogan'), 'データの転載は禁じられています', 'Reproduction of data is forbidden');

replace_text($('form#fm1'), '英和・和英', 'Search');
replace_text($('form#fm1'), ' あいまい検索', ' Fuzzy Search');

replace_text($('#js_open_cond'), '条件を詳細に指定して検索', 'Advanced Search');

// search results area
replace_text($('#title .title'), '検索文字列', 'Search Query');
replace_text($('#title .paging'), '該当件数 : ', '');
replace_text($('#title .paging'), '件', 'results');

replace_text($('#resultlist .totop'), 'ページトップへ', 'Back to Top');
replace_text($('#resultfooter .paging'), '該当件数 : ', '');
replace_text($('#resultfooter .paging'), '件', 'results');

// sidebar
replace_text($('#leftbar .history .top').eq(0), /検索履歴/g, 'Search History');
replace_text($('#leftbar .history .top').eq(1), /単語帳登録履歴/g, 'Wordbook History');
replace_text($('#leftbar .history .middlemain .readmore'), /すべてを見る/g, 'more');

// footer
replace_text($('#footermenu'), 'プライバシーポリシー', 'Privacy Policy');
replace_text($('#footermenu'), '利用規約', 'Terms');
replace_text($('#footermenu'), '会社案内', 'About Us');

function replace_text(dom_name, sub_str, new_sub_str) {
  var new_html = dom_name.html().replace(sub_str, new_sub_str);
  dom_name.html(new_html);
}

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});