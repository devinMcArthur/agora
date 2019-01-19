import Universe from "../models/universe";
import Node from "../models/node";
import User from "../models/user";

/**
 * Create universe
 * @param req
 * @param res
 * @returns void
 */
export async function createUniverse(req, res) {
  try {
    let universe = new Universe({
      title: req.body.title,
      users: req.body.users
    });
    await universe.save();

    req.body.users.forEach(async userID => {
      let user = await User.findByIdAndUpdate(
        userID,
        { $push: { universes: universe._id } },
        { new: true }
      );
    });

    res.json(universe._id);
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Get universe by ID
 * @param req
 * @param res
 * @returns void
 */
export async function getUniverse(req, res) {
  try {
    let universe = await Universe.findById(req.params.id);

    res.json(universe);
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Get public universe
 * @param req
 * @param res
 * @returns void
 */
export async function getPublicUniverse(req, res) {
  try {
    let universe = await Universe.findOne({ public: true });

    res.json(universe);
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Create a universe and starting node for a given user
 * @param req
 * @param res
 * @returns void
 */
export async function createPersonalUniverse(req, res) {
  try {
    let user = await User.findById(req.params.id);
    if (user.personalUniverse) {
      return console.log("This user already has a personal universe");
    }
    let universe = new Universe({
      title: `${user.name}'s Universe`,
      users: new Array(user._id)
    });
    universe = await universe.save();
    user.personalUniverse = universe._id;
    user = await user.save();

    let node = new Node({
      title: user.name,
      author: user._id,
      public: false,
      originUniverse: universe._id
    });
    await node.save();

    console.log("Gigantic Success!");

    res.end();
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Create a universe and starting node for a given user
 * @param req
 * @param res
 * @returns void
 */
export async function getUsersUniverses(req, res) {
  try {
    let user = await User.findById(req.params.id);
    let universes = [];
    if (user.universes) {
      for (var i = 0; i < user.universes.length; i++) {
        universes.push(await Universe.findById(user.universes[i]));
      }
    }

    res.json(universes);
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Create the public universe and add all nodes to it
 * @param req
 * @param res
 * @returns void
 */
export async function createPublicUniverse(req, res) {
  try {
    // let universe = new Universe({
    //   title: "Public",
    //   public: true
    // });
    // await universe.save();

    // let allNodes = await Node.find();
    // for (var i = 0; i < allNodes.length; i++) {
    //   let node = allNodes[i];
    //   node.public = true;
    //   node.originUniverse = universe._id;
    //   await node.save();
    // }

    console.log("Uncomment code in Universe Controller to run this again");

    res.end();
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}
