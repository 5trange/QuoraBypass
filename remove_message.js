sdocument.onload = remove_message(); 

function remove_message()
{
	if(document.location == 'https://www.quora.com/')
	{
		console.log('Quora homepage is loaded. Nothing to do here.');
	} 
	else
	{
		console.log('Some other quora page is being loaded.');
		document.location = document.location + '/';
	}
}