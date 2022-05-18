import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthRoute } from "./AuthRoute";
import ViewRecipe from "../pages/ViewRecipe";
import {
  LandingPage,
  UserDashboard,
  Profile,
  Recipes,
  BlogsPage,
  SingleBlog,
  ContactUs,
  AppLayout,
  LoginAdmin,
  AdminLayout,
  DashboardAdmin,
  SettingsAdmin,
  SliderAdmin,
  UsersNormal,
  UsersAdministrator,
  NewsletterAdmin,
  AdvertisementAdmin,
  RecipesAdmin,
  BlogsAdmin,
  CategoriesAdmin,
  PagesAdmin,
  Categories,
  AddRecipe,
  EditSlider,
  EditAdvert,
  EditAdmin,
  EditUser,
  EditBlog,
  EditCategory,
  EditRecipe,
  EditPage,
  MyRecipe,
} from "../pages";

const AppRoutes = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout landingPage="true">
              <LandingPage />
            </AppLayout>
          }
        />
        <Route
          path="/recipes"
          element={
            <AppLayout>
              <Recipes />
            </AppLayout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <AppLayout>
              <ContactUs />
            </AppLayout>
          }
        />
        <Route
          path="/categories"
          element={
            <AppLayout>
              <Categories />
            </AppLayout>
          }
        />
        <Route
          path="/blogs"
          element={
            <AppLayout>
              <BlogsPage />
            </AppLayout>
          }
        />
        <Route
          path="/blogs/:id"
          element={
            <AppLayout>
              <SingleBlog />
            </AppLayout>
          }
        />
        {/* protected routes */}
        <Route exact path="/user-dashboard" element={<AuthRoute />}>
          <Route
            path="/user-dashboard"
            element={
              <AppLayout>
                <UserDashboard />
              </AppLayout>
            }
          />
        </Route>
        <Route exact path="/profile/:username" element={<AuthRoute />}>
          <Route
            path="/profile/:username"
            element={
              <AppLayout>
                <Profile />
              </AppLayout>
            }
          />
        </Route>
        <Route exact path="/addrecipe" element={<AuthRoute />}>
          <Route
            path="/addrecipe"
            element={
              <AppLayout>
                <AddRecipe />
              </AppLayout>
            }
          />
        </Route>
        {/* admin routes */} 
        <Route path="/admin" element={<LoginAdmin />} />

        <Route exact path="/myrecipe" element={<AuthRoute />}>
          <Route
            path="/myrecipe"
            element={
              <AppLayout>
                <MyRecipe />
              </AppLayout>
            }
          />
        </Route>
        <Route exact path="/viewrecipe" element={<AuthRoute />}>
          <Route
            path="/viewrecipe"
            element={
              <AppLayout>
                <ViewRecipe/>
              </AppLayout>
            }
          />
        </Route>

        {/* admin routes */}
        <Route path="/admin" element={<LoginAdmin />} />

        <Route exact path="/admin/dashboard" element={<AuthRoute />}>
        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
              <DashboardAdmin />
            </AdminLayout>
          }
        />
        </Route>

        <Route exact path="/admin/settings" element={<AuthRoute />}>
        <Route
          path="/admin/settings"
          element={
            <AdminLayout title="/ Settings">
              <SettingsAdmin />
            </AdminLayout>
          }
        />
        </Route>

        <Route exact path="/admin/slider" element={<AuthRoute />}>
        <Route
          path=""
          element={
            <AdminLayout title="/ Slider">
              <SliderAdmin />
            </AdminLayout>
          }
        />
        </Route>

        <Route exact path="/admin/administrator" element={<AuthRoute />}>
        <Route
          path="/admin/administrator"
          element={
            <AdminLayout title="/ Users Administrator">
              <UsersAdministrator />
            </AdminLayout>
          }
        />
        </Route>

        <Route exact path="/admin/normalUsers" element={<AuthRoute />}>
        <Route
          path="/admin/normalUsers"
          element={
            <AdminLayout title="/ Users Normal">
              <UsersNormal />
            </AdminLayout>
          }
        />
        </Route>

        <Route exact path="/admin/categories" element={<AuthRoute />}>
        <Route
          path="/admin/categories"
          element={
            <AdminLayout title="/ Categories">
              <CategoriesAdmin />
            </AdminLayout>
          }
        />
        </Route>

        <Route exact path="/admin/recipes" element={<AuthRoute />}>
        <Route
          path="/admin/recipes"
          element={
            <AdminLayout title="/ Recipes">
              <RecipesAdmin />
            </AdminLayout>
          }
        />
        </Route>

        <Route exact path="/admin/blog" element={<AuthRoute />}>
        <Route
          path="/admin/blog"
          element={
            <AdminLayout title="/ Blogs">
              <BlogsAdmin />
            </AdminLayout>
          }
        />
        </Route>

        <Route exact path="/admin/advertisement" element={<AuthRoute />}>
        <Route
          path="/admin/advertisement"
          element={
            <AdminLayout title="/ Advertisement">
              <AdvertisementAdmin />
            </AdminLayout>
          }
        />
        </Route>

        <Route exact path="/admin/newsletter" element={<AuthRoute />}>
        <Route
          path="/admin/newsletter"
          element={
            <AdminLayout title="/ Newsletter">
              <NewsletterAdmin />
            </AdminLayout>
          }
        />
        </Route>

        <Route exact path="/admin/pages" element={<AuthRoute />}>
        <Route
          path="/admin/pages"
          element={
            <AdminLayout title="/ Pages">
              <PagesAdmin />
            </AdminLayout>
          }
        />
        </Route>

        <Route
          path="/admin/slider/edit"
          element={
            <AdminLayout title="/ Edit">
              <EditSlider />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/advert/edit"
          element={
            <AdminLayout title="/ Edit">
              <EditAdvert />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/administrator/edit"
          element={
            <AdminLayout title="/ Edit">
              <EditAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/normaluser/edit"
          element={
            <AdminLayout title="/ Edit">
              <EditUser />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/blog/edit"
          element={
            <AdminLayout title="/ Edit">
              <EditBlog />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/categories/edit"
          element={
            <AdminLayout title="/ Edit">
              <EditCategory />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/recipe/edit"
          element={
            <AdminLayout title="/ Edit">
              <EditRecipe />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/page/edit"
          element={
            <AdminLayout title="/ Edit">
              <EditPage />
            </AdminLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
