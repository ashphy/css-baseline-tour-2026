const region = document.querySelector('#toast-region');
let count = 0;

function removeToast(toast) {
	toast.remove();
	if (!region.children.length) region.hidePopover();
}

document.querySelector('.toast-add').addEventListener('click', () => {
	const toast = document.createElement('div');
	toast.className = 'toast';
	toast.innerHTML = `<span>保存しました（${++count}）</span><button type="button">閉じる</button>`;
	toast.querySelector('button').addEventListener('click', () => removeToast(toast));
	region.append(toast);

	// @key
	// popover="manual" は、外側のクリックや Esc では閉じない。開閉はJavaScriptで行う
	if (!region.matches(':popover-open')) region.showPopover();
	// @end

	setTimeout(() => removeToast(toast), 5000);
});
