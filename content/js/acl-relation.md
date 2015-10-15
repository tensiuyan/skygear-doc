+++
date = "2015-09-29T18:39:50+08:00"
draft = true
title = "Access Control by relation"

+++

1. PrivateDB are turely private. Setting ACL will have no effect (and no exception)
1. Record saved to PublicDB will default grant read access to public.
1. Able to grant individual user read/write permission.
1. Able to grant permission base on owner relations.
1. Record must have owner, and owner always have full access.

## Common access control operation

### Grant read to friends

```javascript
const note = new Note({
  'content': 'Note for friends.'
});
note.addReadAccess(jsourd.FRIEND);
jsourd.public.save(note);
```

### Grant Access controls by user

```javascript
const ben = jsourd.getUserByEmail('ben@mail.com'); // Discover user.
const note = new Note({
  'content': 'Note for ben.'
});
note.addWriteAccess(ben);
```

### Examine a record access

After you query a record. You can query its access control. And modify it if
wished.

_Querying a record and examine the access control_

``` javascript
jsourd.publicDB.query(query).then(function (records) {
  const acl = records[0].acl;
  console.log(acl.getFullAccess()); // All access entities
  console.log(acl.getReadAccess(jsourd.FOLLOWER)); // Boolean value 
  console.log(acl.getWriteAccess(ben));
}, function (error) {
  console.log(error);
});
```

_Modifying a existing record access control_

``` javascript
let note;
jsourd.publicDB.query(query).then(function (records) {
  const note = records[0];
}, function (error) {
  console.log(error);
});
if (!note.getReadAccess(jsourd.FRIEND)) {
  note.addReadAccess(jsourd.FRIEND);
  jsourd.public.save(note);
}
```

_Removing a existing record access control_

Anyone with `write` permission will be able to modify the access control.

``` javascript
note.removePublicReadAccess();
note.removeReadAccess(jsourd.FRIEND);
jsourd.publicDB.save(note);
```

## Complex ACL

```javascript
const ben = jsourd.getUserByEmail('ben@mail.com'); // Discover user.
const note = new Note({
  'content': 'Note for ben.'
});
const acl = jsoud.ACL();
acl.addWriteAccess(ben);
acl.addReadAccess(jsourd.FRIEND);
acl.addPublicReadAccess();
note.acl = acl; // This will overwrite all existing acl.
```