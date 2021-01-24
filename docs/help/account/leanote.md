# Leanote

This clipper uses the leanote api 2.6.1 documented here https://github.com/leanote/leanote/wiki/leanote-api to login and create notes with image in notebooks.

## Prerequisite

- Working instance of leanote server you installed and self-host (https://github.com/jim3ma/docker-leanote, https://github.com/leanote/leanote) or the platform https://leanote.com.
- An account on this server.


## Bind Account

### New Account

In webclipper settings > Account, click Bind Account to display the 'New Account form' and fill the required fields. Usually Type, Loeanote host, Email and Pwd needs to be filled :

| Field Name                 | Definition                                                                                     | Value               | Required  |
| -------------------------- | ---------------------------------------------------------------------------------------------- | ------------------- | --------- |
| Type                       |                                                                                                | select 'Leanote'    | Yes       |
| Leanote host               | Address of the server, either the service https://leanote.com or you self hosted instance url  | http(s)://domain    | Yes       |
| Email                      | Account email on this server                                                                   | email               | Yes       |
| Pwd                        | Account password on this server.                                                               | password            | Yes       |

### Verify

Click on 'Verify' to login. When successfull, select a Default Repository for clipping among your notebooks which should be listed, and select Leanote as Image Host for clipping images.

## Clipping Image

When you clip an area containing images, the url of the image is clipped as-is with the domain of the source page. For self hosted leanote, if you want to clip also the image you must activate "Uploading Images to host".
If you choose "Uploading Images to host" the url of the image is replaced with the future url of the image in the leanote gallery, but this image will not be available until you do Save content to leanote.


