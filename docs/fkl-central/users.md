# Users and permissions (admins)


Admins manage every KART account on the **Admin** page: approvals, join links, new users, hub access, permissions and deactivation. Hub managers do the same for their own hubs in **Pending approvals** (see [Approvals](../hub-manager/approvals.md)).

!!! info "What changed from the Workshop App"
    - **Manage Users** is now **Admin Access > User Administration**.
    - Workshop App roles became KART permissions: mechanic is **Workshop**; purchaser is **Workshop** plus **Purchasing**; parts_catalog_manager is **FKL Central**; hub_manager is **Hub Manager**; admin is the **Admin** access level.
    - Deactivating is a soft switch-off: the account and its history stay and can be reactivated.

## Permissions in plain words

| Permission | What it lets the person do |
|---|---|
| **Workshop** | Use the Workshop: start services, raise and update repairs, record parts, campaign work, Stores, Schedule. Needs access to the hub too. |
| **Reliability** | Raise and edit reliability tickets and damage, and tick Available or Preferred on karts. |
| **Hub Manager** | Everything in the Workshop plus Workshop Manager, the Hub Manager dashboard, approvals for their hubs, marking karts used and approving orders. Ticking it also ticks Reliability, Customer feedback and Workshop. |
| **Purchasing** | Order actions: submit, mark ordered, receive and cancel. Not approve. |
| **FKL Central** | All FKL Central tabs and reading all hubs. |
| **Remote support** | The Remote Support dashboard, the Support view of KART Comms and reading all hubs. Only remote support holders can be set as support cover. |
| **Customer feedback** | The customer feedback screens. |

The **Access Level** is **User** or **Admin**. Admins can do everything and see every hub.

## Find a user and change permissions

1. On **Select your Hub**, tap **Admin Access**. Open **User Administration**.

    ![User Administration on the Admin page](../assets/img/fkl-central/fc-users-tab.png){ loading=lazy }

2. In **All Users**, tap the person, for example Alex Mechanic.

    ![All Users with Alex Mechanic](../assets/img/fkl-central/fc-users-list.png){ loading=lazy }

3. Under **Hub Access**, tick the hubs and tap **Save Hub Access**.

    ![Hub Access with Demo Hub ticked and Save Hub Access](../assets/img/fkl-central/fc-users-hubs.png){ loading=lazy }

4. Under **Permissions**, tick what they need and tap **Save Permissions**.

    ![Permissions with Workshop ticked and Save Permissions](../assets/img/fkl-central/fc-users-perms.png){ loading=lazy }

## Create a user

1. Tap **Create user**. Fill in the name, e-mail twice, hub and permissions, then tap **Create user**.

    ![The Create user form on the Admin page](../assets/img/fkl-central/fc-users-create.png){ loading=lazy }

2. Copy the **Temporary password** and pass it on privately. Tick **I have passed the password on** and tap **Done**.

    ![Temporary password with Copy password and the confirm tick](../assets/img/fkl-central/fc-users-temp.png){ loading=lazy }

## Deactivate a user

1. Open the user and tap **Deactivate user**. They can no longer sign in, and their permissions stop working.

    ![Deactivate user in the user details](../assets/img/fkl-central/fc-users-deactivate.png){ loading=lazy }

2. To undo it, open the user again and tap **Reactivate user**.

    ![Reactivate user on a deactivated account](../assets/img/fkl-central/fc-users-reactivate.png){ loading=lazy }

!!! tip "Tip"
    **Send Password Reset Email** helps someone who forgot their password. **Hub join links** creates and revokes sign-up links for any hub.

!!! warning "Watch out"
    Before a hub's switch-over, check every workshop person at that hub has a KART account, the **Workshop** permission and access to the hub.
