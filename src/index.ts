import fetch from 'node-fetch';

export default async function helloThere() {
	console.log('General Kenobi');
	const resp = await fetch('https://test-api.service.hmrc.gov.uk/hello/world', {
		headers: {
			Accept: 'application/vnd.hmrc.1.0+json',
		},
	});
	console.log(await resp.text());
}

helloThere();
