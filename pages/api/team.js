export default function handler(req, res) {
  var team = [
    { id: 1, name: 'Bill Mahoney', role: 'Product Owner', picture: '/img/photo1.png' },
    { id: 2, name: 'Saba Cabrera', role: 'Art Director', picture: '/img/photo2.png' },
    { id: 3, name: 'Shae Le', role: 'Tech Lead', picture: '/img/photo3.png' },
    { id: 4, name: 'Skylah Lu', role: 'UX Designer', picture: '/img/photo4.png' },
    { id: 5, name: 'Griff Richards', role: 'Developer', picture: '/img/photo5.png' },
    { id: 6, name: 'Stan John', role: 'Developer', picture: '/img/photo6.png' }
  ];
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(team));
}
